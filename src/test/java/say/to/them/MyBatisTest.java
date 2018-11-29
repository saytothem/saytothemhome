//���� or ����??

package say.to.them;
import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class) //�׽�Ʈ �� �� ������̼� �� ����??
@ContextConfiguration(locations= {"file:src/main/webapp/WEB-INF/spring/root-context.xml"})   //**/*.xml-> root-context.xml �ڵ����� ��θ� ����� �ֳ����� 

public class MyBatisTest{
	@Inject
	private SqlSessionFactory sqlSessionFactory;// SqlSessionFactory �����ϴ°�

	@Test
	public void testFactory() {
		System.out.println(sqlSessionFactory);
	}
	
	@Test
	public void testSession() throws Exception{
		try(SqlSession session=sqlSessionFactory.openSession()) //�����ͺ��̽����� ������ ����ϴ� ��ü�� SqlSession ����
		{System.out.println(session);} catch (Exception e) {
			e.printStackTrace();
		}
	}
}