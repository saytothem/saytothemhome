//성공 or 실패??

package say.to.them;
import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class) //테스트 할 때 어노테이션 꼭 쓰기??
@ContextConfiguration(locations= {"file:src/main/webapp/WEB-INF/spring/root-context.xml"})   //**/*.xml-> root-context.xml 자동으로 경로를 못잡아 주나보당 

public class MyBatisTest{
	@Inject
	private SqlSessionFactory sqlSessionFactory;// SqlSessionFactory 주입하는거

	@Test
	public void testFactory() {
		System.out.println(sqlSessionFactory);
	}
	
	@Test
	public void testSession() throws Exception{
		try(SqlSession session=sqlSessionFactory.openSession()) //데이터베이스와의 연결을 담당하는 객체인 SqlSession 생성
		{System.out.println(session);} catch (Exception e) {
			e.printStackTrace();
		}
	}
}